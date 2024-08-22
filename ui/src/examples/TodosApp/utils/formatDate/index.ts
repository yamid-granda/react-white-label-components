export function formatDate(dueDate: string): string {
  const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const date = new Date(dueDate)
  return formatter.format(date)
}