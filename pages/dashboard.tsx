import { Layout } from '@/components/common/pages/layouts/layout/layout'

const Dashboard = () => {
	return <div>Dashboard</div>
}

Dashboard.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default Dashboard
