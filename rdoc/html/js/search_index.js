var search_data = {"index":{"searchIndex":["array","nilclass","string","voteatx","finder","loader","service","sinatra","votingplace","base","early","electionday","add_schedule_entry()","append_schedule()","cleanup()","cleanup()","cleanup()","cleanup_row()","create_tables()","empty?()","ensure_not_empty()","escape_html()","format_date()","format_info()","format_schedule()","format_schedule_line()","format_time()","get_date()","get_datetimes()","get_time()","is_closed_today()","load_eday_places()","load_evfixed_places()","load_evmobile_places()","make_location()","make_schedule()","new()","new()","new()","place_marker()","search()","search()","search()","search()","search()","search_query()","to_h()","readme-data","readme"],"longSearchIndex":["array","nilclass","string","voteatx","voteatx::finder","voteatx::loader","voteatx::service","voteatx::service::sinatra","voteatx::votingplace","voteatx::votingplace::base","voteatx::votingplace::early","voteatx::votingplace::electionday","voteatx::loader#add_schedule_entry()","voteatx::loader#append_schedule()","array#cleanup()","nilclass#cleanup()","string#cleanup()","voteatx::loader#cleanup_row()","voteatx::loader#create_tables()","nilclass#empty?()","voteatx::loader#ensure_not_empty()","string#escape_html()","voteatx::loader#format_date()","voteatx::votingplace::base::format_info()","voteatx::loader#format_schedule()","voteatx::loader#format_schedule_line()","voteatx::loader#format_time()","voteatx::loader#get_date()","voteatx::loader#get_datetimes()","voteatx::loader#get_time()","voteatx::loader#is_closed_today()","voteatx::loader#load_eday_places()","voteatx::loader#load_evfixed_places()","voteatx::loader#load_evmobile_places()","voteatx::loader#make_location()","voteatx::loader#make_schedule()","voteatx::finder::new()","voteatx::loader::new()","voteatx::votingplace::base::new()","voteatx::votingplace::base::place_marker()","voteatx::finder#search()","voteatx::service#search()","voteatx::votingplace::base::search()","voteatx::votingplace::early::search()","voteatx::votingplace::electionday::search()","voteatx::votingplace::base::search_query()","voteatx::votingplace::base#to_h()","",""],"info":[["Array","","Array.html","",""],["NilClass","","NilClass.html","",""],["String","","String.html","","<p>Add #cleanup methods used by VoteATX::Loader#cleanup_row.\n"],["VoteATX","","VoteATX.html","",""],["VoteATX::Finder","","VoteATX/Finder.html","","<p>Implementation of the VoteATX application.\n<p>Example usage:\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">require</span> <span class=\"ruby-string\">'voteatx'</span>\n<span class=\"ruby-identifier\">finder</span> = <span class=\"ruby-constant\">VoteATX</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Finder</span>.<span class=\"ruby-identifier\">new</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["VoteATX::Loader","","VoteATX/Loader.html","","<p>Load a Spatialite database with voting place information from spreadsheets.\n<p>The database must already …\n"],["VoteATX::Service","","VoteATX/Service.html","",""],["VoteATX::Service::Sinatra","","VoteATX/Service/Sinatra.html","",""],["VoteATX::VotingPlace","","VoteATX/VotingPlace.html","",""],["VoteATX::VotingPlace::Base","","VoteATX/VotingPlace/Base.html","","<p>Base class for a voting place.\n<p>This class should not be accessed directly. Instead, a derived class such …\n"],["VoteATX::VotingPlace::Early","","VoteATX/VotingPlace/Early.html","","<p>Implementation of an early voting place.\n"],["VoteATX::VotingPlace::ElectionDay","","VoteATX/VotingPlace/ElectionDay.html","","<p>Implementation of a voting place for election day.\n"],["add_schedule_entry","VoteATX::Loader","VoteATX/Loader.html#method-i-add_schedule_entry","(id, h)",""],["append_schedule","VoteATX::Loader","VoteATX/Loader.html#method-i-append_schedule","(id, hours)",""],["cleanup","Array","Array.html#method-i-cleanup","()",""],["cleanup","NilClass","NilClass.html#method-i-cleanup","()",""],["cleanup","String","String.html#method-i-cleanup","()",""],["cleanup_row","VoteATX::Loader","VoteATX/Loader.html#method-i-cleanup_row","(row)","<p>Cleanup a row of data read from the spreadsheet.\n"],["create_tables","VoteATX::Loader","VoteATX/Loader.html#method-i-create_tables","()","<p>Initialize all the tables\n"],["empty?","NilClass","NilClass.html#method-i-empty-3F","()",""],["ensure_not_empty","VoteATX::Loader","VoteATX/Loader.html#method-i-ensure_not_empty","(row, *cols)","<p>Assert that the spreadsheet row has non-empty values for each of the\nspecifieid columns.\n"],["escape_html","String","String.html#method-i-escape_html","()",""],["format_date","VoteATX::Loader","VoteATX/Loader.html#method-i-format_date","(t)","<p>Format the date portion of a Time value to a String\n"],["format_info","VoteATX::VotingPlace::Base","VoteATX/VotingPlace/Base.html#method-c-format_info","(place)","<p>Generate content for an info window from database record for a voting\nplace.\n"],["format_schedule","VoteATX::Loader","VoteATX/Loader.html#method-i-format_schedule","(hours)","<p>Given a list of open..close Time ranges, produce a display as a list of\nString values.\n"],["format_schedule_line","VoteATX::Loader","VoteATX/Loader.html#method-i-format_schedule_line","(h)","<p>Given an open..close Time range, format the hours that day as a String\n"],["format_time","VoteATX::Loader","VoteATX/Loader.html#method-i-format_time","(t)","<p>Format the time portion of a Time value to a String\n"],["get_date","VoteATX::Loader","VoteATX/Loader.html#method-i-get_date","(row, col)","<p>Extract date as [mm,dd,yyyy] from specified col, in form “MM/DD/YYYY”\n"],["get_datetimes","VoteATX::Loader","VoteATX/Loader.html#method-i-get_datetimes","(row)","<p>Produce (start_time .. end_time) range from info in database record\n"],["get_time","VoteATX::Loader","VoteATX/Loader.html#method-i-get_time","(row, col)","<p>Extract time as [hh,mm] from specified col, in form “HH:MM”\n"],["is_closed_today","VoteATX::Loader","VoteATX/Loader.html#method-i-is_closed_today","(h)","<p>Determine if an open..close Time range is the indicator for a closed day\n(0:00 to 0:00).\n"],["load_eday_places","VoteATX::Loader","VoteATX/Loader.html#method-i-load_eday_places","(infile, hours)",""],["load_evfixed_places","VoteATX::Loader","VoteATX/Loader.html#method-i-load_evfixed_places","(infile, hours_by_code)",""],["load_evmobile_places","VoteATX::Loader","VoteATX/Loader.html#method-i-load_evmobile_places","(infile)",""],["make_location","VoteATX::Loader","VoteATX/Loader.html#method-i-make_location","(values)","<p>Create an entry in the “voting_locations” table for this location, return\nrow id.\n<p>If the location …\n"],["make_schedule","VoteATX::Loader","VoteATX/Loader.html#method-i-make_schedule","(hours)",""],["new","VoteATX::Finder","VoteATX/Finder.html#method-c-new","(options = {})","<p>Construct a new VoteATX app instance.\n<p>Options:\n<p>:database - Path to the VoteATX database. If not specified, …\n"],["new","VoteATX::Loader","VoteATX/Loader.html#method-c-new","(dbname, options = {})","<p>Create a new loader instance.\n<p>The “dbname” is the name of the Spatialiate database to load. …\n"],["new","VoteATX::VotingPlace::Base","VoteATX/VotingPlace/Base.html#method-c-new","(params)","<p>Create a new voting place instance.\n<p>Parameters:\n<p>:type - one of: :ELECTION_DAY, :EARLY_VOTING_FIXED, :EARLY_VOTING_MOBILE. …\n"],["place_marker","VoteATX::VotingPlace::Base","VoteATX/VotingPlace/Base.html#method-c-place_marker","(type, is_open)","<p>Generate a FindIt::Asset::MapMarker for given voting place type.\n"],["search","VoteATX::Finder","VoteATX/Finder.html#method-i-search","(lat, lng, options = {})","<p>Search for features near a given location.\n<p>Parameters:\n<p>lat - the latitude (degrees) of the location, as …\n"],["search","VoteATX::Service","VoteATX/Service.html#method-i-search","(params)",""],["search","VoteATX::VotingPlace::Base","VoteATX/VotingPlace/Base.html#method-c-search","(db, origin, options = {})","<p>A derived class must override this method.\n"],["search","VoteATX::VotingPlace::Early","VoteATX/VotingPlace/Early.html#method-c-search","(db, origin, options = {})","<p>Return a list of early voting places for this given location.\n<p>The list will contain the closest fixed …\n"],["search","VoteATX::VotingPlace::ElectionDay","VoteATX/VotingPlace/ElectionDay.html#method-c-search","(db, origin, options = {})","<p>Return the voting place for the voting district that contains the indicated\nlocation.\n"],["search_query","VoteATX::VotingPlace::Base","VoteATX/VotingPlace/Base.html#method-c-search_query","(db, *conditions)","<p>Convenience function to create a search query for a voting place.\n<p>This is used in the #search methods …\n"],["to_h","VoteATX::VotingPlace::Base","VoteATX/VotingPlace/Base.html#method-i-to_h","()",""],["README-data","","README-data_rdoc.html","","<p>VoteATX Database Generation\n<p>Overview of Database Tables\n<p>Here is an overview of the key tables in the <em>VoteATX</em> …\n"],["README","","README_rdoc.html","","<p>VoteATX\n<p>VoteATX is a web application that locates best places to vote.\n<p>It was designed for Travis County …\n"]]}}