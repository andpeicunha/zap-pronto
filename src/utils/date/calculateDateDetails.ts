/**
 * Calculates date details based on the current date and specified number of days.
 *
 * @param {number} days - The number of days to add or subtract from the current date.
 * @param {'add'|'subtract'} [operation='subtract'] - The operation to perform on the current date.
 * @returns {{day: number, month: number, year: number, fullDate: string}} An object containing day, month, year, and fullDate properties.
 */
export function calculateDateDetails(
  days: number,
  operation: 'add' | 'subtract' = 'subtract',
) {
  const currentDate = new Date()

  if (operation === 'add') {
    currentDate.setDate(currentDate.getDate() + days)
  } else {
    currentDate.setDate(currentDate.getDate() - days)
  }

  const hour = currentDate.getHours()
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  const fullDate = currentDate.toLocaleDateString()

  return { hour, day, month, year, fullDate }
}
