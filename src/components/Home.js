import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="온라인으로 차량을 주문하세요"
                backgroundImg="model-s.jpg"
                leftBtnText="주문하기"
                rightBtnText="재고 확인하기"
            />
            <Section 
                title="Model 3"
                description="온라인으로 차량을 주문하세요"
                backgroundImg="model-3.jpg"
                leftBtnText="주문하기"
                rightBtnText="재고 확인하기"
            />
            <Section 
                title="Model X"
                description="온라인으로 차량을 주문하세요"
                backgroundImg="model-x.jpg"
                leftBtnText="주문하기"
                rightBtnText="재고 확인하기"
            />
            <Section 
                title="Model Y"
                description="온라인으로 차량을 주문하세요"
                backgroundImg="model-y.jpg"
                leftBtnText="주문하기"
                rightBtnText="재고 확인하기"
            />
            <Section 
                title="태양광과 Powerwall"
                description="모든 전력을 공급"
                backgroundImg="solar-panel.jpg"
                leftBtnText="주문하기"
                rightBtnText="자세히 알아보기"
            />
            <Section 
                title="새로운 태양광과 Powerwall"
                description="청정에너지"
                backgroundImg="solar-roof.jpg"
                leftBtnText="주문하기"
                rightBtnText="자세히 알아보기"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="주문하기"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`