/**
 * Site-level configuration flags.
 */

/**
 * Toggle for the "ARCHIVE UNDER CONSTRUCTION" warning stamp.
 *
 * When true:
 *   - A large diagonal classification-red stamp is rendered across
 *     every page.
 *   - A small "ignore warning" checkbox sits at the bottom-right.
 *     Checking it hides the stamp (state persists in localStorage,
 *     per browser).
 *
 * When false:
 *   - Neither the stamp nor the checkbox renders.
 *   - Set this to false to remove the warning entirely once the
 *     archive is ready for sharing.
 */
export const SHOW_CONSTRUCTION_WARNING = true;
