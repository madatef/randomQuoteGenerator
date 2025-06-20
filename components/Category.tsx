'use-client'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Description, Field, Label, Select } from '@headlessui/react'
import { categories } from '@/constants'
import { ChangeEventHandler } from 'react'
import { category, myColor } from './Main'






const Category = ({
    children, handleChange
  }: {
    children?: React.ReactNode;
    handleChange: ChangeEventHandler<HTMLSelectElement>;
  }) => {
    return (
        <div className="max-w-md px-2 absolute top-2 md:top-10 bg-transparent">

            <Field>
                <Label className="text-sm/6 font-medium text-white">Category</Label>
                <Description className="text-[11px] text-white/50">Forgiveness is selected by default. Choose one to change</Description>
                <div className="relative">
                    <Select onChange={handleChange}
                        className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        disabled={true}
                        
                    >
                        {
                                categories.map(cat => {
                                    return (
                                        <option key={cat} value={cat} style={{backgroundColor: `${myColor}`, opacity: 0.2}} selected={cat === 'forgiveness' ? true : false} className='focus:bg-blue-800'>
                                            {cat} {cat === 'forgiveness' ? '(default)': ''}
                                        </option>
                                    )
                                })
                            }
                    </Select>
                    <FontAwesomeIcon icon={faChevronDown}
                        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 text-white/80"
                        aria-hidden="true"
                    />
                </div>
                <Description className="text-sm text-white/60">This option is disabled becuase API Ninjas moved filtering by category to the premium subscription</Description>
            </Field>
        </div>
    )
}

export default Category





