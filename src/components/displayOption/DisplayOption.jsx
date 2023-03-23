import { useDisplayOptions } from '../../hooks/useApp';
import styles from './DisplayOption.module.css'
function DisplayOption() {
  const { setDisplay, display } = useDisplayOptions();

  return (
    <div className={styles.options}>
        <div className={styles.displayOption}>
          <input
            type="radio"
            id="radio-1"
            name="radio"
            onChange={() => setDisplay(4)}
            checked={display === 4 ? true : false}
          />
          <label htmlFor="radio-1">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTYnIGhlaWdodD0nNTYnIHZpZXdCb3g9JzAgMCA1NiA1NicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PHBhdGggZD0nTTYgMGg0NGE2IDYgMCAwMTYgNnY0NGE2IDYgMCAwMS02IDZINmE2IDYgMCAwMS02LTZWNmE2IDYgMCAwMTYtNnonIGlkPSdhJy8+PC9kZWZzPjxnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PG1hc2sgaWQ9J2InIGZpbGw9JyNmZmYnPjx1c2UgeGxpbms6aHJlZj0nI2EnLz48L21hc2s+PHVzZSBmaWxsPScjRkZGJyBvcGFjaXR5PScuMicgeGxpbms6aHJlZj0nI2EnLz48ZyBtYXNrPSd1cmwoI2IpJyBzdHJva2U9JyNGRkYnPjxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDguMTY3IDkuMzMzKSc+PHJlY3QgeD0nLjUnIHk9Jy41JyB3aWR0aD0nMTAuNjY3JyBoZWlnaHQ9JzE2LjUnIHJ4PSczJy8+PHJlY3QgeD0nMTQuNScgeT0nLjUnIHdpZHRoPScxMC42NjcnIGhlaWdodD0nMTYuNScgcng9JzMnLz48cmVjdCB4PScyOC41JyB5PScuNScgd2lkdGg9JzEwLjY2NycgaGVpZ2h0PScxNi41JyByeD0nMycvPjxyZWN0IHg9Jy41JyB5PScyMC4zMzMnIHdpZHRoPScxMC42NjcnIGhlaWdodD0nMTYuNScgcng9JzMnLz48cmVjdCB4PScxNC41JyB5PScyMC4zMzMnIHdpZHRoPScxMC42NjcnIGhlaWdodD0nMTYuNScgcng9JzMnLz48cmVjdCB4PScyOC41JyB5PScyMC4zMzMnIHdpZHRoPScxMC42NjcnIGhlaWdodD0nMTYuNScgcng9JzMnLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="" />
          </label>
          <input
            type="radio"
            id="radio-2"
            name="radio"
            onChange={() => setDisplay(1)}
            checked={display === 1 ? true : false}
          />
          <label htmlFor="radio-2">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNTYnIGhlaWdodD0nNTYnIHZpZXdCb3g9JzAgMCA1NiA1NicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PHBhdGggZD0nTTYgMGg0NGE2IDYgMCAwMTYgNnY0NGE2IDYgMCAwMS02IDZINmE2IDYgMCAwMS02LTZWNmE2IDYgMCAwMTYtNnonIGlkPSdhJy8+PC9kZWZzPjxnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PG1hc2sgaWQ9J2InIGZpbGw9JyNmZmYnPjx1c2UgeGxpbms6aHJlZj0nI2EnLz48L21hc2s+PHVzZSBmaWxsPScjRkZGJyBvcGFjaXR5PScuMicgeGxpbms6aHJlZj0nI2EnLz48ZyBtYXNrPSd1cmwoI2IpJyBzdHJva2U9JyNGRkYnPjxyZWN0IHg9JzEnIHk9Jy42NjcnIHdpZHRoPSczMycgaGVpZ2h0PScyOScgcng9JzQnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDEwLjUgMTIuODMzKScvPjxyZWN0IHg9JzEnIHk9Jy41JyB3aWR0aD0nMzMnIGhlaWdodD0nMjknIHJ4PSc0JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgxMC41IC0yMCknLz48cmVjdCB4PScxJyB5PScxLjgzMycgd2lkdGg9JzMzJyBoZWlnaHQ9JzI5JyByeD0nNCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTAuNSA0NC42NjcpJy8+PC9nPjwvZz48L3N2Zz4=" alt="" />
          </label>
        </div>
      </div>
  )
}

export default DisplayOption