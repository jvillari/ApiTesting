/**
 * This file is ran before jest is setup. So anything set here, will be usable during testing.
*/

// This will import our default instance of axios. Setting up our messages for test reporting
// via axios interceptors
import './AxiosInterceptor';