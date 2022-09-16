import classNames from "classnames"

/**
 * Placeholder for dynamically-loaded text
 * @example widths can be added as classNames from the parent to give multiline skeletons an organic feel
 *   ```jsx
 *     <SkeletonText className="w-[40ch]" />
 *     <SkeletonText className="w-[39ch]" />
 *     <SkeletonText className="w-[20ch]" />
 *   ```
 */
export const SkeletonText = (props) => (
  <span
    className={classNames(
      "inline-block h-[0.75em] w-full max-w-full rounded bg-gray-3 animate-pulse",
      props.className
    )}
  />
)
export default SkeletonText
