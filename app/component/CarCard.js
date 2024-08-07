import React from 'react'
import { Card,CardHeader,CardTitle,CardContent,CardDescription,CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const CarCard = () => {
  return (
    <div className='w-1/4 p-2 m-2 flex' >
      <Card className='items-center' >
        <CardHeader>
          <CardTitle>Toyota Crysta Innova</CardTitle>
          <CardDescription>6+1 Seater</CardDescription>
        </CardHeader>
        <CardContent>
          <Image width={200} height={200} src='https://img.indianautosblog.com/2016/10/Thai-spec-Toyota-Innova-Crysta-front-three-quarters.jpg' ></Image>
        </CardContent>
        <CardFooter>
          <Button>Book Now</Button>
          {/* <p>Card Footer</p> */}
        </CardFooter>
      </Card>
    </div>
  )
}

export default CarCard




