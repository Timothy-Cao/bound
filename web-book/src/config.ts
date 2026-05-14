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

export const CHAPTER_MUSIC: Record<number, string[]> = {
  1:  ['/audio/music/After%20The%20Vote.mp3', '/audio/music/After%20Hours%20Annex.mp3', '/audio/music/After%20Hours%20Annex%20(1).mp3'],
  2:  ['/audio/music/Late%20Afternoon%20Kitchen.mp3', '/audio/music/Late%20Afternoon%20Kitchen%20(1).mp3'],
  3:  ['/audio/music/Sterile%20Platform%20Tone.mp3', '/audio/music/Sterile%20Platform%20Tone%20(1).mp3'],
  4:  ['/audio/music/After%20Hours%20Annex.mp3', '/audio/music/After%20Hours%20Annex%20(1).mp3'],
  5:  ['/audio/music/Sterile%20Platform%20Tone.mp3', '/audio/music/Sterile%20Platform%20Tone%20(1).mp3'],
  6:  ['/audio/music/Off%20Key%20Hum.mp3', '/audio/music/Off%20Key%20Hum%20(1).mp3'],
  7:  ['/audio/music/Confiscated%20Signal.mp3', '/audio/music/Confiscated%20Signal%20(1).mp3'],
  8:  ['/audio/music/Off%20Key%20Hum.mp3', '/audio/music/Off%20Key%20Hum%20(1).mp3'],
  9:  ['/audio/music/Late%20Afternoon%20Kitchen.mp3', '/audio/music/Late%20Afternoon%20Kitchen%20(1).mp3'],
  10: ['/audio/music/Late%20Afternoon%20Kitchen.mp3', '/audio/music/Late%20Afternoon%20Kitchen%20(1).mp3'],
  11: ['/audio/music/Confiscated%20Signal.mp3', '/audio/music/Confiscated%20Signal%20(1).mp3'],
  12: ['/audio/music/Last%20Tape%20Room.mp3', '/audio/music/Last%20Tape%20Room%20(1).mp3'],
  13: ['/audio/music/Last%20Tape%20Room.mp3', '/audio/music/Last%20Tape%20Room%20(1).mp3'],
};

export const CHAPTER_NARRATION: Record<number, string> = {
  1: '/audio/file1.mp3',
  2: '/audio/file2.mp3',
  3: '/audio/file3.mp3',
  4: '/audio/file4.mp3',
  6: '/audio/file6.mp3',
};
