import { type MRT_TableInstance } from 'mantine-react-table'

interface IDTableProps<T extends Record<string, unknown>> {
    withToolbarFeature?: boolean
    table: MRT_TableInstance<T>
}

export default IDTableProps
