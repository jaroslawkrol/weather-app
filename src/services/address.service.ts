import { Coords } from '../model/interfaces/coords';
import { Address } from '../model/interfaces/address';
import addressRepository from '../api/repositories/address.repository';

export class AddressService {
  public static fetchAddressByCurrentPositionOrReturnDefaultAddress = async (
    coords: Coords | null,
  ): Promise<Address> => {
    let address: Address | null;
    if (!coords) {
      address = await AddressService.fetchAddressByCityName('Warsaw'); // TODO: default city
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
