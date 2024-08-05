"use client"
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react'

const LocalSwitcher = () => {

  const [isPending, startTransition] = useTransition()

  const router = useRouter();

  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {

    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  }

  return (
    <div>
      <label>
        <select style={{ background: "transparent", color: "white" }} defaultValue={localActive} onChange={onSelectChange} disabled={isPending}>
          <option value='az'>AZ</option>
          <option value='en'>EN</option>
          <option value='ru'>RU</option>
        </select>
      </label>
    </div>
  )
}

export default LocalSwitcher