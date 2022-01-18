import styles from "./glitch.module.css"

export default function GlitchText() {
  return (
    <>
      <h1 className={styles.glitch}>
        <span aria-hidden="true">NFT</span>
        NFT
        <span aria-hidden="true">NFT</span>
      </h1>
    </>
  )
}
