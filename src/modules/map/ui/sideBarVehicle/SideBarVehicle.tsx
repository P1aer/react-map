import { BaseButton } from "@shared/ui/Button"
import { ErrorButtonWrapper } from "../mapButton"
import { VehicleList } from "../vehicleList"
import { selectVeh, setCenterCoords, useMapDispatch, useMapSelector } from "@modules/map/model"
import { selectAll, useMockSelector } from "@/entities/mock"
import { selectVehById, useMockActions, type VehicleData } from "@/entities/mock/model"

export const SideBarVehicle = () => {
    const currentVehId = useMapSelector(selectVeh)
    const currentVeh = useMockSelector((state) => selectVehById(state,currentVehId))
    const { loading } = useMockSelector(selectAll)

    const { postMock } = useMockActions()

    const dispatch = useMapDispatch()
    

    const toggleLock = () => {
        if (!currentVeh || loading) return;
        const veh: VehicleData = {
            ...currentVeh,
            isLocked: !currentVeh?.isLocked
        }
        console.log(`car ${veh.name} is ${veh.isLocked ? 'locked' : 'unlocked'}!`)
        postMock(veh)
    }

    const centerMap = () => {
        if (!currentVeh || loading) return
        document.getElementById("map")?.scrollIntoView({
            behavior: 'smooth'
        });
        dispatch(setCenterCoords([...currentVeh.coords]))
    }
    return (
        <div className="flex flex-col h-full mt-3">
            <VehicleList data={currentVeh} />
            <ErrorButtonWrapper>
                <BaseButton disabled={loading} onClick={toggleLock}>
                    {currentVeh?.isLocked ? 'Unlock': 'Lock'} Vehicle
                </BaseButton>
            </ErrorButtonWrapper>
            <ErrorButtonWrapper>
                <BaseButton disabled={loading} onClick={centerMap}>
                    Center on map
                </BaseButton>
            </ErrorButtonWrapper>
        </div>
    )
}