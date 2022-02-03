import { useState } from 'react'

import {
    Flex,
    Text,
} from "@chakra-ui/react"

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts"

export function Graphic() {
    const [positive, setPositive] = useState(true)

    const data = [
        {
          "gray": 4000,
          "green": 2400,
        },
        {
          "gray": 3000,
          "green": 2500,
        },
        {
          "gray": 2000,
          "green": 3000,
        },
        {
          "gray": 2300,
          "green": 2000,
        },
        {
          "gray": 1890,
          "green": 4800,
        },
        {
          "gray": 2390,
          "green": 3800,
        },
        {
          "gray": 3490,
          "green": 4300,
        }
    ]

    // let totalGray = data.reduce((total, accumulator) => {
    //     return total + accumulator.gray
    // }, 0)

    // let totalGreen = data.reduce((total, accumulator) => {
    //     return total + accumulator.green
    // }, 0)

    // // if(totalGreen > totalGray){
    // //     setPositive(true)
    // // } else {
    //     // setPositive(false)
    // // }

    // console.log("Gray: " + totalGray)
    // console.log("Green: " + totalGreen)

    return(
        <Flex className="graphics" alignItems="center">
            <AreaChart 
                width={190}
                height={120}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorGray" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DFE0EB" stopOpacity={0} />
                        <stop offset="0%" stopColor="#DFE0EB" stopOpacity={0} />
                    </linearGradient>

                    <linearGradient id="colorGreen" x1="0" y1="1" x2="1" y2="1">
                        <stop offset="40%" stopColor={positive ? "#8AC576" : "#EB5757"} stopOpacity={0.1} />
                        <stop offset="60%" stopColor={positive ? "#8AC576" : "#EB5757"} stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Tooltip />

                <Area
                    type="natural"
                    dataKey="gray"
                    stroke="#DFE0EB"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorGray)"
                />

                <Area
                    type="natural"
                    dataKey="green"
                    stroke={positive ? "#8AC576" : "#EB5757"}
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorGreen)"
                />
            </AreaChart>

            <Text fontSize="12px" fontWeight="400" color={positive ? "#8AC576" : "#EB5757"}>
                {positive ? "+3.47%" : "-1.32%" }
            </Text>
        </Flex>
    )
}