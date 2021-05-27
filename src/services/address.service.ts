import { Coords } from '../model/interfaces/coords';
import { Address } from '../model/interfaces/address';
import addressRepository from '../api/repositories/address.repository';
import { Constants } from '../utils/constants';

export class AddressService {
  public static fetchAddressByCurrentPositionOrReturnDefaultAddress = async (
    coords: Coords | null,
  ): Promise<Address> => {
    let address: Address | null;
    if (!coords) {
      address = await AddressService.fetchAddressByCityName(Constants.DEFAULT_CITY_NAME);
    } else {
      address = await AddressService.fetchAddressByCoords(coords);
    }
    return address;
  };

  public static fetchAddressByCityName = (cityName: string): Promise<Address> => {
    return addressRepository.fetchAddressByCityName(cityName);
  };

  private static fetchAddressByCoords = (coords: Coords): Promise<Address> => {
    return addressRepository.fetchAddressByCoords(coords.lat, coords.lon);
  };
}
