import ThreeDotIcon from '@/assets/icons/ic_kebab.svg';
import AuthorInfo, {
  AUTHOR_INFO_VARIANTS,
} from '@/pages/Product/components/AuthorInfo';
import CommentForm from '@/pages/Product/components/CommentForm';
import styles from '@/pages/Product/styles/CommentSection.module.scss';

export default function CommentSection() {
  return (
    <>
      <CommentForm />
      <section className={styles.section}>
        {Array(3)
          .fill()
          .map(() => (
            <>
              <div className={styles.commentWrapper}>
                <div className={styles.comment}>
                  혹시 사용기간이 어떻게 되실까요?
                </div>
                <button className={styles.menuButton}>
                  <ThreeDotIcon />
                </button>
              </div>
              <AuthorInfo
                variant={AUTHOR_INFO_VARIANTS.comment}
                nickname={'총명한 판다'}
                updateAt={'2024. 01. 02'}
              />
            </>
          ))}
      </section>
    </>
  );
}
