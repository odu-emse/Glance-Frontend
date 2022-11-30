export const calculateRating = (feedback) => {
	try {
		let sum = 0
		feedback.map((rating) => {
			sum += rating.rating
		})

		return Math.floor(sum / feedback.length)
	} catch (error) {
		console.error(error)
		return null
	}
}
