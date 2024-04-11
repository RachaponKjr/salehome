'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from '../navigation';
import { useLocale } from 'next-intl';
const FlagSelect = () => {
    const locale = useLocale()

    // debug
    // console.log(locale)

    return (
        <>
            <Box role='group' position={'relative'} px={"8px"} py={"4px"} color={"white"}>
                <Link href={"/"} locale={locale === "th" ? "en" : "th"} style={{ cursor: "pointer" }}>
                    {locale.toUpperCase()}
                </Link>
                <Box position={'absolute'} bottom={0} left={0} bg={'red'} _groupHover={{width:'100%'}} transitionDuration={'0.3s'} w={'0%'} h={'2px'} >

                </Box>
            </Box>
        </>
    )
}

export default FlagSelect