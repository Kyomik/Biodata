import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import ImageSliced from "../cardimagesliced/ImageSliced";
import { CardImageSlicedProps } from "./cards.type";

export function CardImageSliced(
    {imageUrl, description, className}: CardImageSlicedProps
){
    return (
        <Card className={`mx-auto w-full max-w-[320px] border-0 bg-transparent ring-0 ${className}`}>
            <CardHeader className="p-0 pb-3">
                <h1 className="
                    text-2xs font-dm-sans text-white/95 font-bold tracking-normal scale-y-110
                ">EXAMPLE</h1>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 p-0">
                <CardDescription className="p-0">
                    <p className="text-xs font-dm-sans text-gray leading-relaxed tracking-normal scale-y-110">{description}</p>
                </CardDescription>
                <ImageSliced src={imageUrl} />
            </CardContent>
        </Card>
    )
}