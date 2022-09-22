import Layout from "@/components/Layout";

const Dashboard = () => {
    return <div>Dashboard</div>
}

Dashboard.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default Dashboard;