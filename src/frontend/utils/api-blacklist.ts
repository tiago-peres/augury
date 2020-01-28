// Contains every exposed Angular API, including ngModules
const _API_BLACKLIST = [
  'animate',
  'animateChild',
  'AnimateChildOptions',
  'AnimateTimings',
  'animation',
  'AnimationAnimateChildMetadata',
  'AnimationAnimateMetadata',
  'AnimationAnimateRefMetadata',
  'AnimationBuilder',
  'AnimationEvent',
  'AnimationFactory',
  'AnimationGroupMetadata',
  'AnimationKeyframesSequenceMetadata',
  'AnimationMetadata',
  'AnimationMetadataType',
  'AnimationOptions',
  'AnimationPlayer',
  'AnimationQueryMetadata',
  'AnimationQueryOptions',
  'AnimationReferenceMetadata',
  'AnimationSequenceMetadata',
  'AnimationStaggerMetadata',
  'AnimationStateMetadata',
  'AnimationStyleMetadata',
  'AnimationTransitionMetadata',
  'AnimationTriggerMetadata',
  'AUTO_STYLE',
  'group',
  'keyframes',
  'NoopAnimationPlayer',
  'query',
  'sequence',
  'stagger',
  'state',
  'style',
  'transition',
  'trigger',
  'useAnimation',
  'AnimationDriver',
  'MockAnimationDriver',
  'MockAnimationPlayer',
  'HTTP_INTERCEPTORS',
  'HttpBackend',
  'HttpClient',
  'HttpClientJsonpModule',
  'HttpClientModule',
  'HttpClientXsrfModule',
  'HttpDownloadProgressEvent',
  'HttpErrorResponse',
  'HttpEvent',
  'HttpEventType',
  'HttpHandler',
  'HttpHeaderResponse',
  'HttpHeaders',
  'HttpInterceptor',
  'HttpParameterCodec',
  'HttpParams',
  'HttpProgressEvent',
  'HttpRequest',
  'HttpResponse',
  'HttpResponseBase',
  'HttpSentEvent',
  'HttpUploadProgressEvent',
  'HttpUrlEncodingCodec',
  'HttpUserEvent',
  'HttpXhrBackend',
  'HttpXsrfTokenExtractor',
  'JsonpClientBackend',
  'JsonpInterceptor',
  'XhrFactory',
  'HttpClientTestingModule',
  'HttpTestingController',
  'RequestMatch',
  'TestRequest',
  'APP_BASE_HREF',
  'AsyncPipe',
  'CommonModule',
  'CurrencyPipe',
  'DatePipe',
  'DecimalPipe',
  'DOCUMENT',
  'formatCurrency',
  'formatDate',
  'formatNumber',
  'formatPercent',
  'FormatWidth',
  'FormStyle',
  'getCurrencySymbol',
  'getLocaleCurrencyName',
  'getLocaleCurrencySymbol',
  'getLocaleDateFormat',
  'getLocaleDateTimeFormat',
  'getLocaleDayNames',
  'getLocaleDayPeriods',
  'getLocaleDirection',
  'getLocaleEraNames',
  'getLocaleExtraDayPeriodRules',
  'getLocaleExtraDayPeriods',
  'getLocaleFirstDayOfWeek',
  'getLocaleId',
  'getLocaleMonthNames',
  'getLocaleNumberFormat',
  'getLocaleNumberSymbol',
  'getLocalePluralCase',
  'getLocaleTimeFormat',
  'getLocaleWeekEndRange',
  'getNumberOfCurrencyDigits',
  'HashLocationStrategy',
  'I18nPluralPipe',
  'I18nSelectPipe',
  'isPlatformBrowser',
  'isPlatformServer',
  'isPlatformWorkerApp',
  'isPlatformWorkerUi',
  'JsonPipe',
  'KeyValue',
  'KeyValuePipe',
  'Location',
  'LOCATION_INITIALIZED',
  'LocationChangeEvent',
  'LocationChangeListener',
  'LocationStrategy',
  'LowerCasePipe',
  'NgClass',
  'NgClassBase',
  'NgComponentOutlet',
  'NgForOf',
  'NgForOfContext',
  'NgIf',
  'NgIfContext',
  'NgLocaleLocalization',
  'NgLocalization',
  'NgPlural',
  'NgPluralCase',
  'NgStyle',
  'NgStyleBase',
  'NgSwitch',
  'NgSwitchCase',
  'NgSwitchDefault',
  'NgTemplateOutlet',
  'NumberFormatStyle',
  'NumberSymbol',
  'PathLocationStrategy',
  'PercentPipe',
  'PlatformLocation',
  'Plural',
  'PopStateEvent',
  'registerLocaleData',
  'SlicePipe',
  'Time',
  'TitleCasePipe',
  'TranslationWidth',
  'UpperCasePipe',
  'ViewportScroller',
  'WeekDay',
  'MOCK_PLATFORM_LOCATION_CONFIG',
  'MockLocationStrategy',
  'MockPlatformLocation',
  'MockPlatformLocationConfig',
  'SpyLocation',
  '$locationShim',
  '$locationShimProvider',
  'AngularJSUrlCodec',
  'LOCATION_UPGRADE_CONFIGURATION',
  'LocationUpgradeConfig',
  'LocationUpgradeModule',
  'UrlCodec',
  'AbstractType',
  'AfterContentChecked',
  'AfterContentInit',
  'AfterViewChecked',
  'AfterViewInit',
  'ANALYZE_FOR_ENTRY_COMPONENTS',
  'APP_BOOTSTRAP_LISTENER',
  'APP_ID',
  'APP_INITIALIZER',
  'ApplicationInitStatus',
  'ApplicationModule',
  'ApplicationRef',
  'asNativeElements',
  'assertPlatform',
  'Attribute',
  'ChangeDetectionStrategy',
  'ChangeDetectorRef',
  'ClassProvider',
  'ClassSansProvider',
  'CollectionChangeRecord',
  'Compiler',
  'COMPILER_OPTIONS',
  'CompilerFactory',
  'CompilerOptions',
  'Component',
  'ComponentFactory',
  'ComponentFactoryResolver',
  'ComponentRef',
  'ConstructorProvider',
  'ConstructorSansProvider',
  'ContentChild',
  'ContentChildren',
  'createPlatform',
  'createPlatformFactory',
  'CUSTOM_ELEMENTS_SCHEMA',
  'DebugElement',
  'DebugEventListener',
  'DebugNode',
  'DEFAULT_CURRENCY_CODE',
  'DefaultIterableDiffer',
  'defineInjectable',
  'destroyPlatform',
  'Directive',
  'DoBootstrap',
  'DoCheck',
  'ElementRef',
  'EmbeddedViewRef',
  'enableProdMode',
  'ErrorHandler',
  'EventEmitter',
  'ExistingProvider',
  'ExistingSansProvider',
  'FactoryProvider',
  'FactorySansProvider',
  'forwardRef',
  'ForwardRefFn',
  'getDebugNode',
  'getModuleFactory',
  'getPlatform',
  'GetTestability',
  'Host',
  'HostBinding',
  'HostListener',
  'Inject',
  'inject',
  'Injectable',
  'InjectableProvider',
  'InjectableType',
  'InjectFlags',
  'InjectionToken',
  'INJECTOR',
  'Injector',
  'InjectorType',
  'Input',
  'isDevMode',
  'IterableChangeRecord',
  'IterableChanges',
  'IterableDiffer',
  'IterableDifferFactory',
  'IterableDiffers',
  'KeyValueChangeRecord',
  'KeyValueChanges',
  'KeyValueDiffer',
  'KeyValueDifferFactory',
  'KeyValueDiffers',
  'LOCALE_ID',
  'MissingTranslationStrategy',
  'ModuleWithComponentFactories',
  'ModuleWithProviders',
  'NgIterable',
  'NgModule',
  'NgModuleFactory',
  'NgModuleFactoryLoader',
  'NgModuleRef',
  'NgProbeToken',
  'NgZone',
  'NO_ERRORS_SCHEMA',
  'OnChanges',
  'OnDestroy',
  'OnInit',
  'Optional',
  'Output',
  'PACKAGE_ROOT_URL',
  'Pipe',
  'PipeTransform',
  'PLATFORM_ID',
  'PLATFORM_INITIALIZER',
  'platformCore',
  'PlatformRef',
  'Predicate',
  'Provider',
  'Query',
  'QueryList',
  'ReflectiveInjector',
  'ReflectiveKey',
  'Renderer2',
  'RendererFactory2',
  'RendererStyleFlags2',
  'RendererType2',
  'ResolvedReflectiveFactory',
  'ResolvedReflectiveProvider',
  'resolveForwardRef',
  'Sanitizer',
  'SchemaMetadata',
  'SecurityContext',
  'Self',
  'setTestabilityGetter',
  'SimpleChange',
  'SimpleChanges',
  'SkipSelf',
  'StaticClassProvider',
  'StaticClassSansProvider',
  'StaticProvider',
  'SystemJsNgModuleLoader',
  'SystemJsNgModuleLoaderConfig',
  'TemplateRef',
  'Testability',
  'TestabilityRegistry',
  'TrackByFunction',
  'TRANSLATIONS',
  'TRANSLATIONS_FORMAT',
  'Type',
  'TypeDecorator',
  'TypeProvider',
  'ValueProvider',
  'ValueSansProvider',
  'Version',
  'ViewChild',
  'ViewChildren',
  'ViewContainerRef',
  'ViewEncapsulation',
  'ViewRef',
  'WrappedValue',
  'async',
  'ComponentFixture',
  'ComponentFixtureAutoDetect',
  'ComponentFixtureNoNgZone',
  'discardPeriodicTasks',
  'fakeAsync',
  'flush',
  'flushMicrotasks',
  'getTestBed',
  'inject',
  'InjectSetupWrapper',
  'MetadataOverride',
  'resetFakeAsyncZone',
  'TestBed',
  'TestBedStatic',
  'TestComponentRenderer',
  'TestModuleMetadata',
  'tick',
  'withModule',
  'createCustomElement',
  'NgElement',
  'NgElementConfig',
  'NgElementConstructor',
  'NgElementStrategy',
  'NgElementStrategyEvent',
  'NgElementStrategyFactory',
  'WithProperties',
  'AbstractControl',
  'AbstractControlDirective',
  'AbstractControlOptions',
  'AbstractFormGroupDirective',
  'AsyncValidator',
  'AsyncValidatorFn',
  'CheckboxControlValueAccessor',
  'CheckboxRequiredValidator',
  'COMPOSITION_BUFFER_MODE',
  'ControlContainer',
  'ControlValueAccessor',
  'DefaultValueAccessor',
  'EmailValidator',
  'Form',
  'FormArray',
  'FormArrayName',
  'FormBuilder',
  'FormControl',
  'FormControlDirective',
  'FormControlName',
  'FormGroup',
  'FormGroupDirective',
  'FormGroupName',
  'FormsModule',
  'MaxLengthValidator',
  'MinLengthValidator',
  'NG_ASYNC_VALIDATORS',
  'NG_VALIDATORS',
  'NG_VALUE_ACCESSOR',
  'NgControl',
  'NgControlStatus',
  'NgControlStatusGroup',
  'NgForm',
  'NgModel',
  'NgModelGroup',
  'NgSelectOption',
  'NumberValueAccessor',
  'PatternValidator',
  'RadioControlValueAccessor',
  'RangeValueAccessor',
  'ReactiveFormsModule',
  'RequiredValidator',
  'SelectControlValueAccessor',
  'SelectMultipleControlValueAccessor',
  'ValidationErrors',
  'Validator',
  'ValidatorFn',
  'Validators',
  'BrowserModule',
  'BrowserTransferStateModule',
  'By',
  'disableDebugTools',
  'DomSanitizer',
  'enableDebugTools',
  'EVENT_MANAGER_PLUGINS',
  'EventManager',
  'HAMMER_GESTURE_CONFIG',
  'HAMMER_LOADER',
  'HammerGestureConfig',
  'HammerLoader',
  'HammerModule',
  'makeStateKey',
  'Meta',
  'MetaDefinition',
  'platformBrowser',
  'SafeHtml',
  'SafeResourceUrl',
  'SafeScript',
  'SafeStyle',
  'SafeUrl',
  'SafeValue',
  'StateKey',
  'Title',
  'TransferState',
  'ANIMATION_MODULE_TYPE',
  'BrowserAnimationsModule',
  'NoopAnimationsModule',
  'BrowserTestingModule',
  'platformBrowserTesting',
  'JitCompilerFactory',
  'platformBrowserDynamic',
  'RESOURCE_CACHE_PROVIDER',
  'BrowserDynamicTestingModule',
  'platformBrowserDynamicTesting',
  'BEFORE_APP_SERIALIZED',
  'INITIAL_CONFIG',
  'PlatformConfig',
  'platformDynamicServer',
  'platformServer',
  'PlatformState',
  'renderModule',
  'renderModuleFactory',
  'ServerModule',
  'ServerTransferStateModule',
  'platformServerTesting',
  'ServerTestingModule',
  'bootstrapWorkerUi',
  'ClientMessageBroker',
  'ClientMessageBrokerFactory',
  'FnArg',
  'MessageBus',
  'MessageBusSink',
  'MessageBusSource',
  'platformWorkerApp',
  'platformWorkerUi',
  'ReceivedMessage',
  'SerializerTypes',
  'ServiceMessageBroker',
  'ServiceMessageBrokerFactory',
  'UiArguments',
  'WORKER_APP_LOCATION_PROVIDERS',
  'WORKER_UI_LOCATION_PROVIDERS',
  'WorkerAppModule',
  'platformWorkerAppDynamic',
  'ActivatedRoute',
  'ActivatedRouteSnapshot',
  'ActivationEnd',
  'ActivationStart',
  'CanActivate',
  'CanActivateChild',
  'CanDeactivate',
  'CanLoad',
  'ChildActivationEnd',
  'ChildActivationStart',
  'ChildrenOutletContexts',
  'convertToParamMap',
  'Data',
  'DefaultUrlSerializer',
  'DeprecatedLoadChildren',
  'DetachedRouteHandle',
  'Event',
  'ExtraOptions',
  'GuardsCheckEnd',
  'GuardsCheckStart',
  'InitialNavigation',
  'LoadChildren',
  'LoadChildrenCallback',
  'Navigation',
  'NavigationCancel',
  'NavigationEnd',
  'NavigationError',
  'NavigationExtras',
  'NavigationStart',
  'NoPreloading',
  'OutletContext',
  'ParamMap',
  'Params',
  'PreloadAllModules',
  'PreloadingStrategy',
  'PRIMARY_OUTLET',
  'provideRoutes',
  'QueryParamsHandling',
  'Resolve',
  'ResolveData',
  'ResolveEnd',
  'ResolveStart',
  'Route',
  'RouteConfigLoadEnd',
  'RouteConfigLoadStart',
  'Router',
  'ROUTER_CONFIGURATION',
  'ROUTER_INITIALIZER',
  'RouteReuseStrategy',
  'RouterEvent',
  'RouterLink',
  'RouterLinkActive',
  'RouterLinkWithHref',
  'RouterModule',
  'RouterOutlet',
  'RouterPreloader',
  'RouterState',
  'RouterStateSnapshot',
  'Routes',
  'ROUTES',
  'RoutesRecognized',
  'RunGuardsAndResolvers',
  'Scroll',
  'UrlHandlingStrategy',
  'UrlMatcher',
  'UrlMatchResult',
  'UrlSegment',
  'UrlSegmentGroup',
  'UrlSerializer',
  'UrlTree',
  'RouterTestingModule',
  'setupTestingRouter',
  'SpyNgModuleFactoryLoader',
  'RouterUpgradeInitializer',
  'setUpLocationSync',
  'ServiceWorkerModule',
  'SwPush',
  'SwRegistrationOptions',
  'SwUpdate',
  'UpdateActivatedEvent',
  'UpdateAvailableEvent',
  'UpgradeAdapter',
  'UpgradeAdapterRef',
  'downgradeComponent',
  'downgradeInjectable',
  'downgradeModule',
  'getAngularJSGlobal',
  'getAngularLib',
  'setAngularJSGlobal',
  'setAngularLib',
  'UpgradeComponent',
  'UpgradeModule',
  'createAngularJSTestingModule',
  'createAngularTestingModule'
];

// Only contains exposed Angular ngModules, used for performance purposes
// when we only want to filter modules
const _MODULE_BLACKLIST = [
  'HttpClientJsonpModule',
  'HttpClientModule',
  'HttpClientXsrfModule',
  'HttpClientTestingModule',
  'CommonModule',
  'LocationUpgradeModule',
  'ApplicationModule',
  'FormsModule',
  'ReactiveFormsModule',
  'BrowserModule',
  'BrowserTransferStateModule',
  'HammerModule',
  'BrowserAnimationsModule',
  'NoopAnimationsModule',
  'BrowserTestingModule',
  'BrowserDynamicTestingModule',
  'ServerModule',
  'ServerTransferStateModule',
  'ServerTestingModule',
  'WorkerAppModule',
  'RouterModule',
  'RouterTestingModule',
  'ServiceWorkerModule',
  'UpgradeModule'
];

export const filterApiList = (arrayToFilter: Array<string>, modulesOnly = false): Array<string> => {
  return arrayToFilter.filter(api => !(modulesOnly ? _MODULE_BLACKLIST : _API_BLACKLIST).includes(api));
};
