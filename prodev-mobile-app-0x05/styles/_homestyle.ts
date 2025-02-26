import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchGroup: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchFormGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },
  searchFormText: {
    fontSize: 16,
    color: '#333',
  },
  searchControl: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchButton: {
    backgroundColor: '#34967C',
    padding: 10,
    borderRadius: 5,
  },
  filterGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  filterContainer: {
    alignItems: 'center',
  },
  listingContainer: {
    padding: 20,
  },
  paginationContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    
  },
  showMoreButton: {
    backgroundColor: '#34967C',
    padding: 10,
    borderRadius: 5,
  },
  showMoreButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export { styles };