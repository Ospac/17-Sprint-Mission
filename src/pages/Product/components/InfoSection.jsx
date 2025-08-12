import LikeIcon from '@/assets/icons/ic_heart.svg';
import KebabIcon from '@/assets/icons/ic_kebab.svg';
import defaultProfileImg from '@/assets/imgs/default_profile.png';
import ItemImg from '@/components/ui/ItemImg';
import Tag from '@/components/ui/Tag';
import styles from '@/pages/Product/styles/InfoSection.module.scss';

export default function InfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imgWrapper}>
        <ItemImg imgUrl='https://avatars.githubusercontent.com/u/31947480?v=4' />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.texts}>
          <hgroup className={styles.titles}>
            <h1 className={styles.title}>아이패드 미니 팔아요</h1>
            <h2 className={styles.price}>500,000원</h2>
            <KebabIcon />
          </hgroup>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoLabel}>상품 소개</h3>
            <article className={styles.description}>
              액정에 잔기스랑 주변부 스크래치있습니다만 예민하신분아니면 전혀
              신경쓰이지않을정도입니다. 박스 보관중입니다. 메모용과
              넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을
              못느꼈네요 잘 안써서 싸게넘깁니다! 택배거래안합니다.
            </article>
            <h3 className={styles.infoLabel}>상품 태그</h3>
            <div className={styles.tags}>
              <Tag>아이패드미니</Tag>
              <Tag>아이패드미니</Tag>
              <Tag>아이패드미니</Tag>
            </div>
          </div>
        </div>
        <div className={styles.sectionFooter}>
          <div className={styles.authorContainer}>
            <img
              className={styles.profileImage}
              src={defaultProfileImg}
              alt='회색 기본 프로필 이미지'
            />
            <div className={styles.authorInfo}>
              <span className={styles.nickname}>총명한 판다</span>
              <span className={styles.updateAt}>2024. 01. 02</span>
            </div>
          </div>
          <button className={styles.likeButton}>
            <LikeIcon />
            <span className={styles.count}>123</span>
          </button>
        </div>
      </div>
    </section>
  );
}
