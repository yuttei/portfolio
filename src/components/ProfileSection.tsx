import type { Profile, SocialLink } from "../types/portfolio";
import { SocialIcon } from "./SocialIcon";

interface ProfileSectionProps {
  /** 表示するプロフィール情報 */
  profile: Profile;
  /** 表示する SNS・連絡先リンクの一覧 */
  socialLinks: SocialLink[];
}

/**
 * 氏名・自己紹介・所属・SNS リンクをまとめて表示するセクションです。
 */
export function ProfileSection({ profile, socialLinks }: ProfileSectionProps) {
  return (
    <section id="profile" className="profile-section" aria-labelledby="profile-heading">
      <div className="profile-header">
        <div className="profile-avatar" aria-hidden={!profile.avatar}>
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={`${profile.handle} のアイコン`}
              className="profile-avatar-image"
            />
          ) : (
            profile.initials
          )}
        </div>
        <div className="profile-identity">
          <h1 id="profile-heading" className="profile-handle-title">
            {profile.handle}
          </h1>
          <div className="profile-subname-row">
            <span className="profile-real-name">{profile.name}</span>
            <span className="profile-reading">{profile.reading}</span>
          </div>
        </div>
      </div>

      <p className="profile-bio">{profile.bio}</p>

      <dl className="profile-details">
        {profile.details.map((item) => (
          <div key={item.label} className="profile-detail-item">
            <dt className="profile-detail-label">{item.label}</dt>
            <dd className="profile-detail-value">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="social-links" aria-label="SNS・連絡先リンク">
        {socialLinks.map((link) => {
          // mailto: リンク（メールアプリ起動）以外は新しいタブで開きます。
          const isEmail = link.kind === "email";

          return (
            <a
              key={link.label}
              href={link.url}
              className="social-link-button"
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
            >
              <SocialIcon kind={link.kind} />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
