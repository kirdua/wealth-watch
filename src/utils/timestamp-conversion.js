import { format } from 'date-fns'

export function readableTimestamp(date) {
  if (!date || date === -1) return 'N/A'

  return (date = format(new Date(), 'MMM do, yyyy'))
}
