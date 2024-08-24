"use client"
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const LocalSwitcher = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`)
  }

  return (
    <div>
      <label>
        <select value={locale} style={{ background: "transparent", color: "white" }} onChange={changeHandler}>
          <option value='en'>EN</option>
          <option value='az'>AZ</option>
          <option value='ru'>RU</option>
        </select>
      </label>
    </div>
  )
}

export default LocalSwitcher