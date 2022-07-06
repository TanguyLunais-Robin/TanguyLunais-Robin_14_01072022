import { useState, useEffect } from "react"
import {Select} from "rs-react-select"
import styled from "styled-components"

//Assets
import Up from "../assets/caret-up-solid.svg"
import Down from "../assets/caret-down-solid.svg"

//Styles
import colors from "../styles/colors"

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
`

const LABEL = styled.label`
    position: absolute;
    color: ${colors.orange};
    font-size: 1.3rem;
    margin-top: -1.4rem;
    font-weight: 700;
`

function SelectStates () {
    const [active, setActive] = useState(false)

    const states = [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District Of Columbia",
        "Federated States Of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
    ];

    const customContainer = {
        position: "relative",
        borderBottom: "solid .2rem",
        borderColor: colors.purpleLight,
    }

    const customSelectMenu = {
        width: "100%",
        padding: "0",
        border: "none",
    }

    const customList = {
        position: "absolute",
        background: colors.white,
        width: "100%",
        border: "none",
        borderTop: "solid .2rem",
        borderColor: colors.orange,
        zIndex: "4"
    }

    const customOption = {
        fontSize: "1.5rem",
        color: colors.purpleLight,
        width: "100%",
        padding: ".5rem"
    }

    const customPlaceholder = {
        fontSize: "1.5rem",
        fontWeight: "300",
        color: colors.purpleLight
    }

    const customOptionSelected = {
        fontWeight: "500",
        fontSize: "1.5rem",
        padding: ".2rem 0",
        color: colors.purpleLight
    }

    useEffect((e) => {
        const close = (e) => {
            const state = e.target.innerHTML
            if (states.indexOf(state) !== -1) {
                console.log(state)
            }
            setActive(false)
            window.removeEventListener("click", close)
        }

        active && window.addEventListener("click", close)
    })

    return (
        <CONTAINER onClick= {() => setActive(true)}>
            {active ? <LABEL>State</LABEL> : null}
            <Select
                down = {Down}
                hoverBackground = {colors.orangeLight}
                options = {states}
                styleContainer = {customContainer}
                styleList = {customList}
                styleOption = {customOption}
                styleOptionSelected = {customOptionSelected}
                stylePlaceholder= {customPlaceholder}
                styleSelectMenu = {customSelectMenu}
                up = {Up}
            />
        </CONTAINER>
    )
}

export default SelectStates