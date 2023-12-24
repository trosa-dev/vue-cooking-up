export interface ICategory {
	name: string
	ingredients: string[]
	image: string
}

export async function getCategories() {
	try {
		const answer = await fetch("https://gist.githubusercontent.com/trosa-dev/48c96bb3ae6d9e98e25c728fd495d1c5/raw/eca7951b1bf4f0da29ff8fef8a0c8e837d9c1f00/categories.json")

		const categories: ICategory[] = await answer.json()
		return categories
	}
	catch (error) {
		console.log(error)
		return [] as ICategory[]
	}
}
