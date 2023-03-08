//import { useState } from 'react'
import styles from './BottomBar.module.css'

interface ImageItem {
  source: string;
  alt: string;
  key: string;
}

interface BottomBarProps {
  icons: ImageItem[];
}

function BottomBar({ icons }: BottomBarProps) {
  //const [selectedIcon, setSelectedIcon] = useState<string | null>(null)
  // TODO: selected icon style

  return (
    <div className={styles.container}>
      {icons.map((a: ImageItem) => {
        return (
          <img
            key={a.key}
            src={a.source}
            alt={a.alt}
            className={styles.icon}
          />
        )
      })}
    </div>
  )
}

export default BottomBar;
