import { useMediaQuery } from '@chakra-ui/react'

import { BREAK_POINTS } from '@/config'

/**
 * 現在の表示デバイスの判断 by breakpoints
 * @returns {object}
 * @property {boolean} isSP スマートフォン表示フラグ
 * @property {boolean} isTablet タブレット表示フラグ
 */
export const useBreakPoints = () => {
  const [isSP, isTablet] = useMediaQuery([`(max-width: ${BREAK_POINTS.sm})`, `(max-width: ${BREAK_POINTS.md})`])
  return { isSP, isTablet }
}
