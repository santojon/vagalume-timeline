/**
 * Angular needed imports
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

/**
 * Application specific imports
 */
import { TimelineService } from './services/timelineService';
import { Timeline } from './components/timeline';

/**
 * Initialize app with default component and data providers
 */
bootstrap(
    Timeline,
    [HTTP_PROVIDERS, TimelineService]
);