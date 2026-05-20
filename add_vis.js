document.addEventListener('DOMContentLoaded', async () => {
	// vegaEmbed('#vis-1', 'vega-lite/working_1.json')
	for (let i = 1; i <= 10; i++) {
		vegaEmbed(`#vis-${i}`, `vega-lite/working_${i}.json`)
	}
})
