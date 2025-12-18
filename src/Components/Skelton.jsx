import React from 'react'
import { Card, Skeleton } from "@heroui/react";

export default function Skelton() {
    return <>
        <Card className="w-7/8 sm:w-3/4 md:w-lg lg:w-3xl mx-auto mt-5 space-y-5 p-4 mb-5" radius="lg">
            <div className="flex items-center gap-3">
                <div>
                    <Skeleton className="flex rounded-full w-12 h-12" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
            </div>
            <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300" />
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
            </div>
        </Card>
        <Card className="w-7/8 sm:w-3/4 md:w-lg lg:w-3xl mx-auto mt-5 space-y-5 p-4 mb-5" radius="lg">
            <div className="flex items-center gap-3">
                <div>
                    <Skeleton className="flex rounded-full w-12 h-12" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
            </div>
            <Skeleton className="rounded-lg">
                <div className="h-24 rounded-lg bg-default-300" />
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
            </div>
        </Card>
    </>
}
