import AppPresenter from './presenter/app-presenter.js';
import EventsModel from './model/events-model.js';
import DataService from './service/data-service.js';

const dataService = new DataService();
const eventsModel = new EventsModel(dataService);

const appPresenter = new AppPresenter({
  eventsModel,
});

appPresenter.init();
