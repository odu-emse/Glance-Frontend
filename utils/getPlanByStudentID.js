/**
 * @name GetPlanByStudentID
 * @module
 * @category Hooks
 */

/**
 * @name getPlan
 * @summary Asynchronous helper function (fetch hook) for fetching the user's plan of study based on the user's ID
 * @function
 * @async
 * @param {string} studentID The user's ID that the query is executed against
 * @returns {Object} The user's plan of study or an axios Error object
 * @example
 *
 * getPlan(param)
 *		.then((response) => {
 *			try {
 *				... // Update the component state with the response
 *				... // Set the loading state to false
 *			} catch (error) {
 *				... // Handle the error if the response is not valid
 *			}
 *		})
 *		.catch((err) => {
 *			... // Handle the error if the fetch request fails
 *		})
 */
export default async function getPlan(studentID) {
	const payload = {
		// language=GraphQL
		query: `{
					plan(studentID: "${studentID}"){
						id,
						student{
							id,
							email,
							firstName,
							lastName,
							dob
						},
						modules{
							id,
							enrolledAt,
							role,
							module{
								id,
								moduleName,
								moduleNumber,
								description,
								duration,
								intro,
								keywords,
								updatedAt,
								feedback{
									rating
								},
								assignments{
									id,
									name,
									dueAt
								},
								members{
									enrolledAt,
									role,
									id
								},
								parentCourses{
									id,
									course{
										id,
										name
									}
								}
							},
						},
						courses{
							id,
							enrolledAt,
							course{
								id,
								name,
							}
						},
						assignmentResults{
							id,
							assignment{
								id,
								name,
								dueAt,
							},
							gradedBy{
								id,
								email,
								firstName,
								lastName
							},
							result,
							submittedAt
						}
					}
				}`,
	};
	return await fetch(process.env.NEXT_PUBLIC_API_URL, {
		method: 'POST',
		body: JSON.stringify(payload),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((document) => {
			return document.json();
		})
		.then((res) => {
			return res.data.plan;
		})
		.catch((err) => {
			console.error(err);
			throw new Error(err);
		});
}
