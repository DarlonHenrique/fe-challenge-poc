import { Icons } from "@/components/icons"
import type { CompanyLocation } from "@/lib/api/types"

type LocationProps = {
  location: CompanyLocation
  locations: CompanyLocation[]
}

const Location = ({ location, locations }: LocationProps) => {
  const { id, name } = location

  return (
    <li className="flex flex-col gap-1 border-b">
      <span className="flex items-center gap-2">
        <Icons.Location />
        {name}
      </span>

      {/* {showSubLocations ? (
        <ul className="pl-4">
          {subLocations.map((subLocation) => (
            <Location
              location={subLocation}
              locationsByParentId={locationsByParentId}
              assetsByLocationId={assetsByLocationId}
              assetsByParentId={assetsByParentId}
              key={location.id}
            />
          ))}
        </ul>
      ) : null} */}
    </li>
  )
}

export { Location }
