'use client'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useState } from 'react'

import TH from '../imgs/TH.png'
import EN from '../imgs/EN.png'

import { FaAngleDown } from "react-icons/fa";
const FlagSelect = () => {
    const [opentFlag, setOpentFlag] = useState(false)
    const [flag, setFlag] = useState(TH)

    const SelectFlag = () => {
        setFlag(flag === TH ? EN : TH)
        setOpentFlag(!opentFlag)
    }
    return (
        <>
            <Box position={'relative'} p={0} zIndex={100}>
                <ul onClick={() => setOpentFlag(!opentFlag)} >
                    <li style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}><Image src={flag} alt={flag} width={30} height={30} /><FaAngleDown /></li>
                </ul>
                {/* Menu */}
                {opentFlag && (
                    <Box position={'absolute'} cursor={"pointer"} display={"flex"} gap={2} right={0} borderRadius={'5px'} w={"max-content"} h={"max-content"} bg={"white"} p={"8px"} mt={"8px"}
                        onClick={SelectFlag}
                    >
                        <Image src={flag === TH ? EN : TH} width={30} height={30} />
                        <Text>{flag === TH ? "Englist" : "Thailand"}</Text>
                    </Box>
                )}

            </Box>
        </>
    )
}

export default FlagSelect