import styles from '@/pages/Product/styles/CommentForm.module.scss';

export default function AuthorInfo() {
  return (
    <div className={styles.authorInfo}>
      <img className={styles.profileImg} alt='기본 프로필 이미지'></img>
      <div>
        <span className={styles.nickname}>총명한 판다</span>
        <span className={styles.updateAt}>2024. 01. 02</span>
      </div>
    </div>
  );
}
