'use client'
import { SearchManufacturerProps } from '@/types'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { manufacturers } from '@/constants'
const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {

    const [query, setQuery] = useState("")

    const filteredManufactures = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

    return (
        <div className='searc_manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <ComboboxButton className="absolute top-[14px]">
                        <Image src="/car-logo.svg" width={20} height={20} className='ml-4' alt='Car Logo' />
                    </ComboboxButton>

                    <ComboboxInput
                        className="search-manufacturer__input"
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <ComboboxOptions>
                            {filteredManufactures.length === 0 && query !== "" ? (
                                <ComboboxOptions className="search-manufacter__option">
                                    Create "{query}"
                                </ComboboxOptions>
                            ) : (
                                filteredManufactures.map((item) => (
                                    <ComboboxOptions key={item} className={({ active }: any) => `relative
                                    search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                    `}
                                    defaultValue={item}
                                    >
                                        {item}
                                    </ComboboxOptions>
                                ))
                            )}
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
export default SearchManufacturer