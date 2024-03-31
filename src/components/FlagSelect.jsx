'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
const FlagSelect = () => {
    const [opentFlag, setOpentFlag] = useState(false)
    const [flag, setFlag] = useState("TH")

    const SelectFlag = () => {
        setFlag(flag === "TH" ? "EN" : "TH")
        setOpentFlag(!opentFlag)
    }
    return (
        <>
            <Box position={'relative'} boxShadow={'lg'} bg={"white"} px={"8px"} py={"4px"}>
                <ul onClick={() => setOpentFlag(!opentFlag)} >
                    <li style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>{flag === "TH" ? "TH" : "EN"}<FaAngleDown /></li>
                </ul>
                {/* Menu */}
                {opentFlag && (
                    <Flex position={'absolute'} border={"1px solid gray"} borderRadius={'5px'} cursor={"pointer"} gap={2} right={0} zIndex={10} w={"max-content"} h={"max-content"} bg={"white"} p={"8px"} mt={"8px"}
                        onClick={SelectFlag}
                    >
                        <Text px={"8px"}>{flag === "TH" ? "English" : "Thailand"}</Text>
                    </Flex>
                )}

            </Box>
        </>
    )
}

export default FlagSelect