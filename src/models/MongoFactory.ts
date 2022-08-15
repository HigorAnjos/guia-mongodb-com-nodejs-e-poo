import Lens from './Lens';
import Frame from './Frame';
// import MongoModel from './MongoModel';
// import IFrame from '../interfaces/Frame';
// import ILens from '../interfaces/Lens';

export default class MongoFactory {
  private static options = {
    lens: Lens,
    frame: Frame,
  };

  public static create(type: 'lens' | 'frame') {
    return new MongoFactory.options[type]();
  }
}
