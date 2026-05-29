const visualisations = new Map()
const consensusDropdown = document.querySelector('#vis-10-consensus-dropdown')

const syncConsensusSelection = (value) => {
	const vis = visualisations.get('vis-10')
	if (!vis) return

	vis.then((result) => {
		result.view.signal('SelectGroup', value).run()
	})
}

document.addEventListener('DOMContentLoaded', async () => {
	// vegaEmbed('#vis-1', 'vega-lite/working_1.json')
	for (let i = 1; i <= 10; i++) {
		let vis = vegaEmbed(`#vis-${i}`, `vega-lite/working_${i}.json`)
		visualisations.set(`vis-${i}`, vis)
	}

	if (consensusDropdown) {
		syncConsensusSelection(consensusDropdown.value)
	}
})

// listen for changes to checkboxes and send a signal when they change for vis 2
document.querySelectorAll('.form-checkbox').forEach((checkbox) => {
	checkbox.addEventListener('change', () => {
		const city = checkbox.getAttribute('dataset-city')
		const value = checkbox.checked

		visualisations.get('vis-2').then((result) => {
			result.view.signal(city, value).run()
		})
	})
})

// listen for changes to the dropdown and send a signal when it changes for vis 10
if (consensusDropdown) {
	consensusDropdown.addEventListener('change', (event) => {
		syncConsensusSelection(event.target.value)
	})
}
