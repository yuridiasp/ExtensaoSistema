function initializeTooltip(tooltipContent, message) {
    const tooltipText = createSpan(message)
    tooltipContent.appendChild(tooltipText)
    styleTooltipContainer(tooltipContent)
    styleTooltipText(tooltipText)
    addTooltipArrow(tooltipText)
    addTooltipEvents(tooltipContent, tooltipText)
}

function createSpan(message) {
    const span = document.createElement("span")
    span.innerHTML = message

    return span
}

function styleTooltipContainer(tooltip) {
    tooltip.style.position = 'relative'
    tooltip.style.display = 'inline-block'
    tooltip.style.cursor = 'pointer'
}

function styleTooltipText(tooltipText) {
    tooltipText.style.visibility = 'hidden'
    tooltipText.style.width = '120px'
    tooltipText.style.backgroundColor = '#555'
    tooltipText.style.color = '#fff'
    tooltipText.style.textAlign = 'center'
    tooltipText.style.borderRadius = '6px'
    tooltipText.style.padding = '5px 0'
    tooltipText.style.position = 'absolute'
    tooltipText.style.zIndex = '1'
    tooltipText.style.bottom = '125%'
    tooltipText.style.left = '50%'
    tooltipText.style.marginLeft = '-60px'
    tooltipText.style.opacity = '0'
    tooltipText.style.transition = 'opacity 0.3s'
}

function addTooltipArrow(tooltipText) {
    const tooltipArrow = document.createElement('div')
    tooltipArrow.style.content = '""'
    tooltipArrow.style.position = 'absolute'
    tooltipArrow.style.top = '100%'
    tooltipArrow.style.left = '50%'
    tooltipArrow.style.marginLeft = '-5px'
    tooltipArrow.style.borderWidth = '5px'
    tooltipArrow.style.borderStyle = 'solid'
    tooltipArrow.style.borderColor = '#555 transparent transparent transparent'
    tooltipText.appendChild(tooltipArrow)
}

function addTooltipEvents(tooltip, tooltipText) {
    tooltip.addEventListener('mouseover', () => {
        tooltipText.style.visibility = 'visible'
        tooltipText.style.opacity = '1'
    })

    tooltip.addEventListener('mouseout', () => {
        tooltipText.style.visibility = 'hidden'
        tooltipText.style.opacity = '0'
    })
}
