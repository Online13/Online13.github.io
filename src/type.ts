export interface Store<T> {
	unsubscribe(): void;
	subscribe(onStoreChange: () => void): () => void;
	getSnapshot(): T;
}
