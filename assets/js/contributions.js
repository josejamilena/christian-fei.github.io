;(function (data) {
  try {
    const first = document.querySelector('[data-count]:not([data-count^="0"])')
    first && first.scrollIntoView({ block: 'start', inline: 'nearest' })
    document.body.scrollIntoView({ block: 'start', inline: 'nearest' })
  } catch (err) { console.error(err) }

  if (!Array.isArray(data)) {
    return console.info('invalid data to draw contributions', data)
  }

  var ctx = document.getElementById('yearsChart')
  if (!ctx) {
    return console.info('missing chart element', ctx)
  }
  var yearsChart = new window.Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.year),
      datasets: [{
        label: '# of public commits',
        data: data.map(d => d.total),
        borderWidth: 1
      }]
    }
  })

  console.log(yearsChart)
})(window.contributionsByYear)
