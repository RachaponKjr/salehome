'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { Link } from '../navigation';
import { useLocale } from 'next-intl';
const FlagSelect = () => {
    const [opentFlag, setOpentFlag] = useState(false)
    const locale = useLocale()

    // debug
    // console.log(locale)

    return (
        <>
            <Box position={'relative'} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} bg={"white"} px={"8px"} py={"4px"} color={"#676767"}>
                <ul onClick={() => setOpentFlag(!opentFlag)} >
                    <li style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>{locale.toUpperCase()}<FaAngleDown /></li>
                </ul>
                {/* Menu */}
                {opentFlag && (
                    <Flex position={'absolute'} border={"1px solid gray"} borderRadius={'5px'} cursor={"pointer"} gap={2} right={0} zIndex={10} w={"max-content"} h={"max-content"} bg={"white"} p={"8px"} mt={"8px"}>
                        <Link href={"/"} locale={locale === "th" ? "en" : "th"}>
                            <Text color={"#676767"} px={"8px"}>{locale === "th" ? "English" : "Thailand"}</Text>
                        </Link>
                    </Flex>
                )}

            </Box>
        </>
    )
}

export default FlagSelect