import styles from './FlipCardGrid.module.scss'
interface CardData {
  id: number
  imageUrl: string
  link: string
  description: string
}

const cards: CardData[] = [
  {
    id: 1,
    imageUrl:
      'https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg',
    link: 'https://example.com',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    imageUrl:
      'https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg',
    link: 'https://example.com',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    imageUrl:
      'https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg',
    link: 'https://example.com',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 4,
    imageUrl:
      'https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg',
    link: 'https://example.com',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 5,
    imageUrl:
      'https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg',
    link: 'https://example.com',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 6,
    imageUrl:
      'https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg',
    link: 'https://example.com',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 7,
    imageUrl:
      'https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg',
    link: 'https://example.com',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 8,
    imageUrl:
      'https://i.pinimg.com/originals/e8/82/67/e88267a222de3b152d6aced055fc84a7.jpg',
    link: 'https://example.com',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
]

export const FlipCardGrid: React.FC = () => {
  return (
    <div className={`${styles.fullScreen}, ${styles.cardGrid}, scrollable`}>
      {cards.map((card) => (
        <div key={card.id} className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div
              className={styles.flipCardFront}
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            ></div>
            <div className={styles.flipCardBack}>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                Preview
              </a>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                Repository
              </a>

              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
