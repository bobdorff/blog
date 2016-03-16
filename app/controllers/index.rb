get '/' do
  erb :'/index'
end

get '/about' do
  if request.xhr?
    erb :'/about' 
  else
    erb :'/about'
  end
end

get '/projects' do
  if request.xhr?
    erb :'/projects'
  else
    erb :'/projects'
  end
end

get '/blog' do
    redirect to("https://medium.com/@bobdorff")
end
